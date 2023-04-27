import React from 'react';

export const About = () => {
  return (
    <div className="w-full md:w-1/2 h-full p-10 px-4 lg:px-10 flex flex-col items-center">
      <div className="h-24 w-24 rounded-full overflow-hidden relative shadow-lg">
        <img src="/me.jpg" className="w-auto absolute" />
      </div>
      <div className="mb-auto max-w-lg w-full flex flex-col items-center mt-10">
        <div className="w-fit">
          <h3 className="text-3xl uppercase text-center text-editor-dark dark:text-zinc-100 chonky-underline-yellow">
            Bohdan Ly
          </h3>
        </div>
        {/* <p className="font-semibold mb-5 text-center text-editor-dark dark:text-zinc-100">
          Front-end Developer
        </p> */}
        <p className="text-editor-dark dark:text-zinc-100 mt-10 font-mono text-lg">
          I'm well-organized, self-motivated, resourceful, and able to motivate others, with
          excellent communication and interpersonal skills. I'm persistent in achieving the final
          result, ready to do complex work, and learn new technologies/get new knowledge. I've been
          creating single-page applications using React and JavaScript for a year. Additionally,
          I've been practicing web layout design for about two years. I strive to become a
          successful front-end developer, with my ultimate goal being a great team lead in the
          future.
        </p>
      </div>
    </div>
  );
};
