from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message", "")
    ai_response = "I hear you. It must feel overwhelming. Want to try a short breathing exercise?"
    return jsonify({"reply": ai_response})

if __name__ == "__main__":
    app.run(debug=True)
