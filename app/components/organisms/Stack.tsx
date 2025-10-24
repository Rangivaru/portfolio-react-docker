import React from "react";
import Separator from "../atoms/Separator";
import { StackData } from "@/app/data/Stack";

export default function Stack() {
  return (
    <>
      <h3 className="text-3xl font-semibold uppercase">Stack</h3>
      <Separator />
      <div className="flex gap-4 flex-wrap mt-4 ">
        {StackData.map((stack, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-md bg-gray hover:bg-gray-lighter p-3">
            {stack.logo}
            <p>{stack.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
