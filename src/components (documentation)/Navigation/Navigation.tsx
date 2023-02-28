import NavigationItems from "./NavigationItems";
import { NavigationProps } from "./NavigationProps";
import MobileNavigationHeader from "./MobileNavigationHeader";
import DesktopNavigationHeader from "./DesktopNavigationHeader";
import { NavigationContainer, NavigationOverlay } from "./NavigationStyles";

const Navigation = ({
  isMobileMenuOpen,
  onMobileMenuToggle,
}: NavigationProps) => {
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: "0",
          zIndex: "2",
          backgroundColor: "#fff",
        }}
      >
        <MobileNavigationHeader onMobileMenuToggle={onMobileMenuToggle} />
        <NavigationContainer isMobileMenuOpen={isMobileMenuOpen}>
          <DesktopNavigationHeader />
          <nav style={{ height: "344.5px" }}>
            <NavigationItems
              onMobileMenuToggle={onMobileMenuToggle}
              isMobileMenuOpen={isMobileMenuOpen}
            />
          </nav>
        </NavigationContainer>
        {isMobileMenuOpen && (
          <NavigationOverlay
            isMobileMenuOpen={isMobileMenuOpen}
            onClick={onMobileMenuToggle}
          ></NavigationOverlay>
        )}
      </div>
    </>
  );
};

export default Navigation;
