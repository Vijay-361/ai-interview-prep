function Interview() {
  return (
    <div style={styles.container}>
      <h2>Mock Interview</h2>
      <p><b>Question:</b> What is Virtual DOM?</p>

      <textarea
        rows="5"
        placeholder="Type your answer..."
        style={styles.textarea}
      />

      <button style={styles.button}>Submit Answer</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px"
  },
  textarea: {
    width: "100%",
    marginTop: "10px"
  },
  button: {
    marginTop: "10px",
    padding: "10px"
  }
};

export default Interview;
