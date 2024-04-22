const object = {
  CopyText(text: string) {
    let textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy"); 

    document.body.removeChild(textarea);
  },
  Capitalize(value: string) { // $options.filters.Capitalize
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  },
  ParseError(error: any) {
    if (!error)
      return ""

    console.log(error.data);

    if (error?.data?.details) console.log(error?.data?.details);

    if (error?.response?.status == 504) return "Server API could not be reached"
    else if (error?.data?.message) return error.data.message
    else if (error.message) return error.message
    else if (error.response) return error.response.data ? error.response.data.message : error.response
    else if (error?.data?.details) return error.data.details
    else return error
  }

};

export default object;