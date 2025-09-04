from google.cloud import firestore

db = firestore.Client()

def save_message(user_id, message):
    doc_ref = db.collection("messages").add({
        "userId": user_id,
        "text": message,
        "timestamp": firestore.SERVER_TIMESTAMP
    })
    return doc_ref
