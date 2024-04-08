using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebAPIDiarista.Models
{
    public class Diaria
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("_id")]
        public string Id { get; set; }
        [BsonElement("cliente")]
        public string Cliente { get; set; }
        [BsonElement("data")]
        public string Data { get; set; }
        [BsonElement("email")]
        public string Email { get; set; }
        [BsonElement("valor")]
        public decimal Valor { get; set; }
        [BsonElement("avaliacao")]
        public string Avaliacao { get; set; }

    }
}
