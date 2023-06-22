public class WorkHistoryUpdateRequest : WorkHistoryAddRequest, IModelIdentifier
{
	[Required]
	public int Id { get; set; }
}