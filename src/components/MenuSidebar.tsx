import React from "react";
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

const MenuSidebar = () => {
  return (
    <>
      <Sidebar.Pushable>
        <Sidebar as={Menu} animation="overlay" vertical visible={true}>
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={false}>
          <Segment textAlign="center" style={{ padding: "1em 0em" }} vertical>
            <Container>
              <Menu pointing secondary size="large">
                <Menu.Item>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a">Log in</Button>
                  <Button as="a" style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default MenuSidebar;
