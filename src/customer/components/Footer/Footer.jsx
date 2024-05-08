import Grid from "../../../components/grid/Grid";
import Container from "../../../components/container/Container";
import List from "../../../components/list/List";
import ListItem from "../../../components/list/ListItem";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 text-gray-50 pt-8 pb-5">
        <Container>
          <Grid className="grid-cols-4 justify-items-center">
            {/* --------------------Company Footer menu-------------------- */}
            <div>
              <div className="pb-8">
                <h4 className="font-sans font-semibold text-2xl">Company</h4>
              </div>
              <div>
                <List>
                  <ListItem className="py-1" link={"/about"}>
                    About
                  </ListItem>
                  <ListItem className="py-1" link={"/blog"}>
                    Blog
                  </ListItem>
                  <ListItem className="py-1" link={"/jobs"}>
                    Jobs
                  </ListItem>
                  <ListItem className="py-1" link={"/press"}>
                    Press
                  </ListItem>
                  <ListItem className="py-1" link={"/partners"}>
                    Partners
                  </ListItem>
                </List>
              </div>
            </div>
            {/* --------------------Solutions Footer menu-------------------- */}
            <div>
              <div className="pb-8">
                <h4 className="font-sans font-semibold text-2xl">Solutions</h4>
              </div>
              <div>
                <List>
                  <ListItem className="py-1" link={"/marketing"}>
                    Marketing
                  </ListItem>
                  <ListItem className="py-1" link={"/analysis"}>
                    Analysis
                  </ListItem>
                  <ListItem className="py-1" link={"/commerce"}>
                    Commerce
                  </ListItem>
                  <ListItem className="py-1" link={"/insight"}>
                    Insight
                  </ListItem>
                  <ListItem className="py-1" link={"/support"}>
                    Support
                  </ListItem>
                </List>
              </div>
            </div>
            {/* --------------------Document Footer menu-------------------- */}
            <div>
              <div className="pb-8">
                <h4 className="font-sans font-semibold text-2xl">Document</h4>
              </div>
              <div>
                <List>
                  <ListItem className="py-1" link={"/guides"}>
                    Guides
                  </ListItem>
                  <ListItem className="py-1" link={"/api-status"}>
                    API Status
                  </ListItem>
                </List>
              </div>
            </div>
            {/* --------------------Legal Footer menu-------------------- */}
            <div>
              <div className="pb-8">
                <h4 className="font-sans font-semibold text-2xl">Legal</h4>
              </div>
              <div>
                <List>
                  <ListItem className="py-1" link={"/claims"}>
                    Claims
                  </ListItem>
                  <ListItem className="py-1" link={"/policy"}>
                    Policy
                  </ListItem>
                  <ListItem className="py-1" link={"/terms"}>
                    Terms
                  </ListItem>
                </List>
              </div>
            </div>
          </Grid>
          <Grid className="justify-items-center text-center pt-8">
            <div>
              <p className="font-sans text-sm text-gray-400">
                @2024 ls-santo. All rights reserved.
              </p>
              <p className="font-sans text-sm text-gray-400">
                Made with love by Me.
              </p>
              <p className="font-sans text-sm text-gray-400">
                icons made by{" "}
                <a
                  className="underline text-orange-500"
                  target="_blank"
                  href="https://www.freepik.com/"
                >
                  {" "}
                  Freepik{" "}
                </a>{" "}
                from
                <a
                  className="underline text-orange-500"
                  target="_blank"
                  href="http://www.flaticon.com"
                >
                  {" "}
                  flaticon{" "}
                </a>
              </p>
            </div>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Footer;
