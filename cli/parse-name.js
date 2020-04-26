function parseName(name) {
  return name.split(/_|\s/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default parseName
