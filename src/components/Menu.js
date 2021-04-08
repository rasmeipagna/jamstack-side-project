import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../css/header.css"
import MenuItem from "./MenuItem"
import { Nav, Navbar } from 'react-bootstrap'

/**
 * Define MenuItem fragment and get all primary menu items.
 */
const MENU_QUERY_WITH_CHILDREN = graphql`
  fragment MenuItem on WPGraphQL_MenuItem {
    id
    label
    parentId
    url
    path
    title
    target
  }
  query GETMAINMENU {
    wpgraphql {
      menuItems(where: {location: PRIMARY}, first: 1000) {
        nodes {
          ...MenuItem
          childItems {
            nodes {
              ...MenuItem
              childItems {
                nodes {
                  ...MenuItem
                }
              }
            }
          }
        }
      }
      generalSettings {
        url
      }
    }
  }
`

const Menu = () => {
  return (
    <StaticQuery
      query={MENU_QUERY_WITH_CHILDREN}
      render={(data) => {
        console.log(data.wpgraphql.menuItems)

        const flatListToHierarchical = (
          data = [],
          {idKey='id',parentKey='parentId',childrenKey='children'} = {}
        ) => {
            const tree = [];
            const childrenOf = {};
            data.forEach((item) => {
                const newItem = {...item};
                const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
                childrenOf[id] = childrenOf[id] || [];
                newItem[childrenKey] = childrenOf[id];
                parentId
                    ? (
                        childrenOf[parentId] = childrenOf[parentId] || []
                    ).push(newItem)
                    : tree.push(newItem);
            });
            return tree;
        };

        var hierarchicalList = flatListToHierarchical( data.wpgraphql.menuItems.nodes );

        console.log(hierarchicalList);


        if (data.wpgraphql.menuItems) {
          const menuItems = data.wpgraphql.menuItems.nodes
          const wordPressUrl = data.wpgraphql.generalSettings.url

          return (
            // <div style={{ marginBottom: "20px" }}>
            <Navbar expand="lg">
                <Navbar.Brand href="/"><img src={require('../assets/images/design/logo-supbiotech.png')} /></Navbar.Brand>
              <Nav>
              {
                hierarchicalList &&
                hierarchicalList.map((menuItem) => (
                  
                    <MenuItem key={menuItem.id} menuItem={menuItem} wordPressUrl={wordPressUrl}/>
                    

                ))
                
              }
              </Nav>
              </Navbar>
            // </div>
          )
        }
        return null
      }}
    />
  )
}

export default Menu