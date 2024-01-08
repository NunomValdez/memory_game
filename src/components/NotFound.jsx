import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <p>
      Page Not Found, go back to the{" "}
      <Link className="text-indigo-600" to={"/"}>
        Home
      </Link>{" "}
      page.
    </p>
  );
}
