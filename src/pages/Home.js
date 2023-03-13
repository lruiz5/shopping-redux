import { ListCard } from "../components";
import { useTitle } from "../hooks/useTitle";

const items = [
  {
    id: "hp-1",
    poster_path: "1001.jpg",
    name: "Sony Wh-Ch510 Bluetooth Wireless",
    price: 149,
  },
  {
    id: "hp-2",
    poster_path: "1002.jpg",
    name: "boAt Rockerz 450",
    price: 49,
  },
  {
    id: "hp-3",
    poster_path: "1003.jpg",
    name: "JBL Tune 760NC",
    price: 179,
  },
  {
    id: "hp-4",
    poster_path: "1004.jpg",
    name: "Logitech H111 Wired",
    price: 39,
  },
  {
    id: "hp-5",
    poster_path: "1005.jpg",
    name: "Apple Airpods Max Bluetooth Headset",
    price: 199,
  },
  {
    id: "hp-6",
    poster_path: "1006.jpg",
    name: "ZEBRONICS Zeb-Thunder Wired",
    price: 29,
  },
];

export const Home = ({ title }) => {
  useTitle(title);
  return (
    <main>
      <section className="products">
        {items.map((item) => (
          <ListCard key={item.id} product={item} />
        ))}
      </section>
    </main>
  );
};
