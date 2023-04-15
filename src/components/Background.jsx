import React from "react";

function Background() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-lg ">
        <div className="absolute top-20 mix-blend-multiply filter blur-xl opacity-70 animate-blop animation-delay-2000 -right-1 w-72 h-72 bg-pink-300 rounded-full" />
        <div className="absolute top-20 mix-blend-multiply filter blur-xl opacity-70 animate-blop animation-delay-4000 -left-1 w-72 h-72  bg-yellow-300 rounded-full" />
        <div className="absolute top-32 mix-blend-multiply filter blur-xl opacity-70 animate-blop left-28 s w-72 h-72 bg-blue-300 rounded-full" />
      </div>
    </div>
  );
}

export default Background;
