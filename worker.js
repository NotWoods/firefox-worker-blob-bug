self.onmessage = async evt => {
    const url = evt.data;
    const res = await fetch(url);
    await res.blob();
}
