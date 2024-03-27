using DiaristaAPI.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace DiaristaAPI.Services
{
    public class ClienteService
    {

        private readonly IMongoCollection<Cliente> _clientesCollection;
        public ClienteService(IOptions<DiaristaDataSettings> diaristaDataSettings)
        {
            var mongoClient = new MongoClient(
                diaristaDataSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
            diaristaDataSettings.Value.DatabaseName);

            _clientesCollection = mongoDatabase.GetCollection<Cliente>(
              diaristaDataSettings.Value.ClientesCollectionName);
        }
        public async Task<List<Cliente>> GetAsync() =>
            await _clientesCollection.Find(_ => true).ToListAsync();

        public async Task<Cliente?> GetAsync(string id) =>
            await _clientesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Cliente newCliente) =>
            await _clientesCollection.InsertOneAsync(newCliente);

        public async Task UpadateAsync(string id, Cliente updatedCliente) =>
            await _clientesCollection.ReplaceOneAsync(x => x.Id == id, updatedCliente);

        public async Task RemoveAsync(string id) =>
            await _clientesCollection.DeleteOneAsync(x => x.Id == id);
    }
}
