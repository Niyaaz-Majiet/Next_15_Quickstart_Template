import DesktopNavBar from "./DesktopNav/DesktopNav";
import MobileNavBar from "./MobileNav/MobileNav";

type Props = {
  handleLogout: any;
  isMobile: boolean;
};

export default function NavBar({ handleLogout, isMobile }: Props) {
  return isMobile ? (
    <MobileNavBar handleLogout={handleLogout} />
  ) : (
    <DesktopNavBar handleLogout={handleLogout} />
  );
}
