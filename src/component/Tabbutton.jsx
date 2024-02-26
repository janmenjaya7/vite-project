export default function TabButton({ children, onSelect, isSelected }) {
  // console.log("tapbutton componet exaqute");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
