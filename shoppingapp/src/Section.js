import "./styles.css";
export default function Section() {
  const handleSearch = () => {
    let mySearch = document.getElementById("search");
  };
  return (
    <div>
      <div className="section">
        <input id="search" type="search" placeholder="enter item to search" />
        <button onClick={handleSearch}>search</button>
      </div>
    </div>
  );
}
