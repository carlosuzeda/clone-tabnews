function Status(request, response) {
  return response.status(200).json({ message: "Vou morar nos EUA" });
}

export default Status;
