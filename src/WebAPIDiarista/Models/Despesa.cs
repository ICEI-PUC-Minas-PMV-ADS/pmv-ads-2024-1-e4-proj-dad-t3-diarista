using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebAPIDiarista.Models
{
    public class Despesa
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("_id")]
        public string Id { get; set; }
        [BsonElement("natureza")]
        public string Natureza { get; set; }
        [BsonElement("valor")]
        public decimal Valor { get; set; }
        [BsonElement("data")]
        public string Data { get; set; }
    }
}
