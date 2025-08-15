"use client";

import { Fragment, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Navigations from "./Navigations";
import { Container } from "../core/container";
import { Button } from "../core/button";
import Link from "next/link";
import { authClient } from "@/lib/authClient";

export default function Header() {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const lastYRef = useRef(0);
  const { data } = authClient.useSession();

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 64) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.header
        animate={isHidden ? "hidden" : "isHidden"}
        whileHover="isHidden"
        onFocusCapture={() => setIsHidden(false)}
        variants={{ hidden: { y: "-100%" }, isHidden: { y: "0%" } }}
        transition={{ duration: 0.2 }}
        className="sticky top-0 z-40 mx-auto h-auto w-full border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md"
      >
        <Container>
          <div className="border-x border-neutral-900">
            <div className="flex h-16 w-full items-center gap-4 overflow-hidden rounded-2xl px-6">
              <div className="flex flex-1">
                <span className="text-2xl leading-none font-medium text-white">
                  Hoppscotch
                </span>
              </div>
              <div className="flex items-center">
                <Navigations />
              </div>
              <div className="flex flex-1 justify-end">
                <div className="flex items-center gap-2">
                  {!data?.session ? (
                    <Fragment>
                      <Button asChild={true}>
                        <Link href={"/signin"}>Login</Link>
                      </Button>
                      <Button varinat="secondary" asChild={true}>
                        <Link href={"/signup"}>Get started</Link>
                      </Button>
                    </Fragment>
                  ) : (
                    <Button varinat="secondary" asChild={true}>
                      <Link href={"/dashboard"}>Dashboard</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </motion.header>
    </AnimatePresence>
  );
}
