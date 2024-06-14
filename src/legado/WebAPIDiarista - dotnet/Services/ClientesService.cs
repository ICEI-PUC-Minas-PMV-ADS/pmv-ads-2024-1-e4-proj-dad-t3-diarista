using WebAPIDiarista.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace WebAPIDiarista.Services
{
    public class ClientesService
    {
        private readonly IMongoCollection<Cliente> _clientesCollection;

        public ClientesService(
            IOptions<DBDiaristaDataBaseSettings> dBDiaristaDataBaseSettings)
        {
            var mongoClient = new MongoClient(
                dBDiaristaDataBaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(
                dBDiaristaDataBaseSettings.Value.DatabaseName);
            _clientesCollection = mongoDatabase.GetCollection<Cliente>(
                dBDiaristaDataBaseSettings.Value.ClientesCollectionName);
        }

        public async Task<List<Cliente>> GetAsync() =>
            await _clientesCollection.Find(_ => true).ToListAsync();
        public async Task<Cliente> GetAsync(string id) =>
            await _clientesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Cliente newCliente) =>
            await _clientesCollection.InsertOneAsync(newCliente);
        public async Task UpdateAsync(string id, Cliente updatedCliente) =>
            await _clientesCollection.ReplaceOneAsync(x => x.Id == id, updatedCliente);
        public async Task RemoveAsync(string id) =>
            await _clientesCollection.DeleteOneAsync(x => x.Id == id);
    }
}
