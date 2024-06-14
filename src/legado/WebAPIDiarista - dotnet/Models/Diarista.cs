using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebAPIDiarista.Models
{
    public class Diarista
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("_id")]
        public string Id { get; set; }
        [BsonElement("nome")]
        public string Nome { get; set; }
        [BsonElement("endereco")]
        public string Endereco { get; set; }
        [BsonElement("dataNascimento")]
        public string DataNascimento { get; set;}
    }
}
