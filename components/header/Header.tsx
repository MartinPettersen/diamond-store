import TopHeader from "./TopHeader";
import SearchFunction from "./SearchFunction";
import ShoppingCartButton from "./ShoppingCartButton";
import Logo from "./Logo";
import CategoryNavBar from "./CategoryNavBar";
import UserButton from "./UserButton";

const Header = async () => {
  return (
    <header className="flex flex-col items-center  ">
      <TopHeader />
      <div className="flex  w-[100%] justify-around">
        <Logo />
        <div className="w-full md:max-w-lg flex flex-1 flex-row items-center pb-4 pt-2 ">
          <SearchFunction />
          <div className="flex felx-1 gap-3">
            <div>
              <UserButton />
            </div>
            <div>
              <ShoppingCartButton />
            </div>
          </div>
        </div>
      </div>
      <CategoryNavBar />
    </header>
  );
};

export default Header;
