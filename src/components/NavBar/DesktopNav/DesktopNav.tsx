type Props = {
  handleLogout: any;
};

export default function DesktopNavBar({ handleLogout }: Props) {
  return (
    <div
      className={`h-auto justify-between flex-row w-full flex flex-wrap absolute top-0 left-0 bg-blue-600 text-white`}
    >
      <button className={`self-start p-4 h-16`} onClick={handleLogout}>
        LOGOUT
      </button>
      <div
        className={`h-16 justify-center self-center w-fit p-4 flex flex-row flex-wrap`}
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
    </div>
  );
}
