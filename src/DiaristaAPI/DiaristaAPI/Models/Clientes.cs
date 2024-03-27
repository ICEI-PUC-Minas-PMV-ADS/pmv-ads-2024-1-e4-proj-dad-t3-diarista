using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DiaristaAPI.Models
{
    public class Clientes
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Nome")]
        public string Nome { get; set; } = null!;

        [BsonElement("Endereco")]
        public string Endereco { get; set; } = null!;
    }
}
