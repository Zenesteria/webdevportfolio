'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState({
    err: false,
    msg: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    // Handle Email sub
    setIsLoading(true);
    const subscribe = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const result = await subscribe.json();
    const { msg, error } = result;
    setIsLoading(false);

    if (error) {
      setMsg({
        err: true,
        msg: error,
      });
    } else {
      setMsg({
        err: false,
        msg,
      });
    }
  };
  return (
    <div className="flex flex-col justify-center w-[80%] min-w-[330px] mx-auto h-fit min-h-[30vh] my-20 p-4 rounded-xl dark:bg-[#291810] dark:border-none border border-[#101629] dark:text-white text-black">
      <h1 className="font-bold mb-3" style={{ fontSize: "calc(1rem + 0.5vw)" }}>
        Subscribe to the newsletter
      </h1>
      <p className="">
        Get emails from me about web development, tech, and early access to new
        articles.
      </p>
      <div className="w-full flex justify-between items-center my-4 border rounded-lg overflow-hidden">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-none outline-none w-full p-4"
          placeholder="example@gmail.com"
        />
        <Button
          onClick={handleClick}
          className="dark:bg-orange-400 min-w-[100px] dark:text-[#101629] bg-[#101629] text-orange-400 font-semibold p-4 rounded-md"
          style={{
            animation: isLoading
              ? "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
              : "none",
          }}
        >
          {isLoading ? ". . ." : "Subscribe"}
        </Button>
      </div>
      <h1 style={{ color: msg.err ? "red" : "green" }}>{msg.msg}</h1>
    </div>
  );
}
