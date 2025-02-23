import useWindowSize from "@/hooks/useWindowSize";

type Props = {
  handleLogout: any;
};

export default function DashboardNavBar({ handleLogout }: Props) {
  const { size } = useWindowSize();

  return (
    <div
      className={`${
        size.isMobile
          ? "h-full justify-start flex-col"
          : "h-auto justify-between flex-row"
      } w-full flex flex-wrap absolute top-0 left-0 bg-blue-600 text-white`}
    >
      <button
        className={`${
          size.isMobile ? "absolute bottom-0 left-0" : "self-start"
        } p-4 h-16`}
        onClick={() => handleLogout()}
      >
        LOGOUT
      </button>
      <div
        className={`${
          size.isMobile
            ? "h-fit justify-between self-start"
            : "h-16 justify-center self-center"
        } w-fit p-4 flex flex-row flex-wrap`}
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
