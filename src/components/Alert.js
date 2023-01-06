const Alert = (props) => {
  const variant = props.variant || "primary";
  let variantClass = "";
  switch (variant) {
    case "primary":
        variantClass = "text-blue-700 bg-blue-100"
      break;
    case "danger":
        variantClass = "text-red-700 bg-red-100"
      break;
    default:
        variantClass = "text-gray-700 bg-gray-100"
      break;
  }
  return (
    <>
      <div
        className={`p-4 mb-4 text-sm ${variantClass} rounded-lg`}
        role="alert"
      >
        {props.children}
      </div>
    </>
  );
};

export default Alert;
