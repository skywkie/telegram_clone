import styles from "./Sidebar.module.scss";

import SidebarHead from "./Head/SidebarHead";
import SidebarItem from "./Item/SidebarItem";

const testUsersList = [
  { name: "skywkie", description: "*last message", id: 1512521214 },
  { name: "dimon", description: "*last message", id: 1512521214 },
  { name: "lexa", description: "*last message", id: 1512521214 },
  { name: "vova", description: "*last message", id: 1512521214 },
  { name: "andrey", description: "*last message", id: 1512521214 },
  { name: "daniil", description: "*last message", id: 1512521214 },
  { name: "zhenya", description: "*last message", id: 1512521214 },
];

export default function Sidebar(): React.ReactNode {
  return (
    <div className={styles.sidebar}>
      <SidebarHead />
      <nav>
        {testUsersList.map((user, i) => {
          return (
            <SidebarItem
              path={user.id}
              name={user.name}
              description={user.description}
              key={i}
            />
          );
        })}
      </nav>
    </div>
  );
}
