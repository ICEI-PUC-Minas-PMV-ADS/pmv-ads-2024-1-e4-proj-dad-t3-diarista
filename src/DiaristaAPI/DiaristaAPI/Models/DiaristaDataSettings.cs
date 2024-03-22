namespace DiaristaAPI.Models
{
    public class DiaristaDataSettings
    {
        // OBS: Aqui está armazenando as informações de conexão do arquivo appsettings.json
        // Portanto, os nomes serão identicos ao JSON

        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string DiaristaCollectionName { get; set; } = null!;
        public string ClientesCollectionName { get; set; } = null!;
        public string DespesaCollectionName { get; set; } = null!;
    }
}
