namespace WebAPIDiarista.Models
{
    public class DBDiaristaDataBaseSettings
    {
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string DiaristasCollectionName { get; set; } = null!;
        public string ClientesCollectionName { get; set; } = null!;
        public string DespesasCollectionName { get; set; } = null!;
        public string DiariasCollectionName { get; set; } = null!;

    }
}
