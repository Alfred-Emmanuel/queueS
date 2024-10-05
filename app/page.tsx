import {
  pacifico,
  source_code_pro_500,
  source_code_pro_700,
} from "./styles/fons";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="pl-7 md:pl-0 md:flex flex-col h-screen border-2 border-black items-center justify-center text-center">
        <h1 className={`${pacifico.className} text-4xl text-primary_color`}>
          Queue Simplified
        </h1>
        <p
          className={`${source_code_pro_700.className} mt-5 text-xl text-tertiary_color`}
        >
          {" "}
          A long overdue alternative to physical queues{" "}
        </p>
        <p
          className={`${source_code_pro_500.className} mt-3 text-tertiary_color w-[65%] text-balance`}
        >
          {" "}
          Create and manage virtual queues instantly to help you and your
          customers have a greate business experience{" "}
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-10 mt-8">
          <Link
            href={`#`}
            className={`bg-primary_color text-white rounded-md px-8 py-2`}
          >
            Create Queue
          </Link>
          <Link
            href={`#`}
            className={`bg-primary_color text-white rounded-md px-8 py-2`}
          >
            Join Queue
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute left-0 bottom-0"
        >
          <path
            fill="#e1dfff"
            fill-opacity="1"
            d="M0,224L60,197.3C120,171,240,117,360,101.3C480,85,600,107,720,138.7C840,171,960,213,1080,197.3C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            data-darkreader-inline-fill=""
            // style={{ "--darkreader-inline-fill": "#212425;" }}
          ></path>
        </svg>
      </main>
    </div>
  );
}
