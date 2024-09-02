export default function NavButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} px-4 hover:text-blue-400 duration-200 active:text-blue-400`}
    >
      {props.children}
    </button>
  );
}
