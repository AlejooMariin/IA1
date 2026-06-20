export default function Card({ title, value }) {

    return (
        <div style={styles.card}>
            <h3>{title}</h3>
            <p style={styles.value}>{value}</p>
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: "#f3f4f6",
        padding: "15px",
        borderRadius: "10px",
        width: "180px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    },
    value: {
        fontSize: "24px",
        fontWeight: "bold"
    }
};