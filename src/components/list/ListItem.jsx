const ListItem = ({ className, children, link, onClick }) => {
  return (
    <li className={`${className}`} onClick={onClick}>
      <a href={link}>{children}</a>
    </li>
  );
};

export default ListItem;
