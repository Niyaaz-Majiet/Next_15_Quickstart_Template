import { useState } from "react";

type Props = {
  handleLogout: any;
};

export default function MobileNavBar({ handleLogout }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={`h-full bg-blue-600 text-white z-40 flex flex-col fixed ${
        open ? "w-4/6" : "w-2/12"
      }`}
    >
      {open ? (
        <span
          className="text-3xl text-white p-4 self-end"
          onClick={() => setOpen(!open)}
        >
          X
        </span>
      ) : (
        <span
          className="text-3xl text-white p-4 self-end"
          onClick={() => setOpen(!open)}
        >
          {">"}
        </span>
      )}

      {open && (
        <div
          className={`h-16 justify-start self-start w-fit p-4 flex flex-col`}
        >
          <a className="w-fit p-4" href="/">
            Home
          </a>
          <a className="w-fit p-4" href="/dashboard/info">
            Info
          </a>
          <a className="w-fit p-4" href="/dashboard/info">
            Heading 3
          </a>
        </div>
      )}

      {open && (
        <button className={`left-0 p-4 h-16 text-white bottom-0 absolute hover:border border-white rounded`} onClick={handleLogout}>
          LOGOUT
        </button>
      )}
    </div>
  );
}
