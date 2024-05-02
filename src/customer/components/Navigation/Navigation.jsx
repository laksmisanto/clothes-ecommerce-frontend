import { useState } from "react";
import Container from "../../../components/container/Container";
import Grid from "../../../components/grid/Grid";
import Flex from "../../../components/flex/Flex";
import List from "../../../components/list/List";
import ListItem from "../../../components/list/ListItem";
import womenBlueDress from "../../../assets/women-blue-dress.webp";
import kidsDress from "../../../assets/kids-dress.webp";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import {
  AccessoriesMenuData,
  BrandsMenuData,
  ClothingMenuData,
} from "../../../data";

const Navigation = () => {
  const [showHide, setShowHide] = useState(false);
  const handleActiveMenu = () => {
    setShowHide(!showHide);
    console.log(showHide);
  };
  return (
    <>
      <div className="bg-slate-50">
        <Container>
          <nav>
            <Grid className="grid-cols-2 py-2 justify-between relative">
              <Flex className="gap-x-10">
                <div>
                  <a href="/">logo</a>
                </div>
                <List className="flex gap-x-4">
                  <ListItem link="/">Home</ListItem>
                  <ListItem
                    className="cursor-pointer"
                    onClick={handleActiveMenu}
                  >
                    Women
                  </ListItem>
                  {showHide && (
                    <Grid className="transition-opacity duration-500 ease-linear grid-cols-6 absolute w-full top-10 left-0 p-10 bg-slate-50">
                      <div>
                        <h6 className="font-sans font-medium text-lg pb-3 cursor-default">
                          Clothing
                        </h6>
                        <List>
                          {ClothingMenuData.map((item, i) => (
                            <ListItem
                              key={i}
                              className="font-normal text-base my-3"
                              link={item.link}
                            >
                              {item.title}
                            </ListItem>
                          ))}
                        </List>
                      </div>
                      <div>
                        <h6 className="font-sans font-medium text-lg pb-3 cursor-default">
                          Accessories
                        </h6>
                        <List>
                          {AccessoriesMenuData.map((item, i) => (
                            <ListItem
                              key={i}
                              className="font-normal text-base my-3"
                              link={item.link}
                            >
                              {item.title}
                            </ListItem>
                          ))}
                        </List>
                      </div>
                      <div>
                        <h6 className="font-sans font-medium text-lg pb-3 cursor-default">
                          Brands
                        </h6>
                        <List>
                          {BrandsMenuData.map((item, i) => (
                            <ListItem
                              key={i}
                              className="font-normal text-base my-3"
                              link={item.link}
                            >
                              {item.title}
                            </ListItem>
                          ))}
                        </List>
                      </div>

                      <div className="col-span-3">
                        <Grid className="grid-cols-2 gap-x-10">
                          <a href="/women-dress">
                            <img src={womenBlueDress} alt="women dress" />
                            <div>
                              <h3 className="font-medium text-lg">
                                New Arrivals
                              </h3>
                              <p>Shop now</p>
                            </div>
                          </a>
                          <a href="kids-dress">
                            <img src={kidsDress} alt="women dress" />
                            <div>
                              <h3 className="font-medium text-lg">
                                Artwork Tees
                              </h3>
                              <p>Shop now</p>
                            </div>
                          </a>
                        </Grid>
                      </div>
                    </Grid>
                  )}
                  <ListItem link="/men">Men</ListItem>
                  <ListItem link="/kids">Kids</ListItem>
                </List>
              </Flex>
              <Flex className="justify-end gap-x-8">
                <div className="border-r pr-8 border-gray-400">
                  <a href="/signin">Sign In</a>
                </div>
                <div>
                  <a href="/signup">Create Account</a>
                </div>
                <div>
                  <SearchIcon />
                </div>
                <div>
                  <LocalGroceryStoreOutlinedIcon />
                </div>
              </Flex>
            </Grid>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default Navigation;
