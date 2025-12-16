function Upload() {
  return (
    <div style={styles.container}>
      <h2>Upload Your Resume</h2>
      <input type="file" />
      <button style={styles.button}>Upload</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px"
  },
  button: {
    marginTop: "10px",
    padding: "10px"
  }
};

export default Upload;
