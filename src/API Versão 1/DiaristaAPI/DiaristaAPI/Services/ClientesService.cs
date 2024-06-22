using DiaristaAPI.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace DiaristaAPI.Services
{
    public class ClientesService
    {

        private readonly IMongoCollection<Clientes> _clientesCollection;
        public ClientesService(IOptions<DiaristaDataSettings> diaristaDataSettings)
        {
            var mongoClient = new MongoClient(
                diaristaDataSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
            diaristaDataSettings.Value.DatabaseName);

            _clientesCollection = mongoDatabase.GetCollection<Clientes>(
              diaristaDataSettings.Value.ClientesCollectionName);
        }
        public async Task<List<Clientes>> GetAsync() =>
            await _clientesCollection.Find(_ => true).ToListAsync();

        public async Task<Clientes?> GetAsync(string id) =>
            await _clientesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Clientes newCliente) =>
            await _clientesCollection.InsertOneAsync(newCliente);

        public async Task UpadateAsync(string id, Clientes updatedCliente) =>
            await _clientesCollection.ReplaceOneAsync(x => x.Id == id, updatedCliente);

        public async Task RemoveAsync(string id) =>
            await _clientesCollection.DeleteOneAsync(x => x.Id == id);
    }
}
