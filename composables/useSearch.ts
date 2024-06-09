export const useSearch = () => {
  const search = useState("search_navigation", () => "")
  const handleSearch = () => {
    console.log(search.value, "from side bar")
  }
  return { search, handleSearch }
}
