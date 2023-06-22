public class WorkPositionUpdateRequest : WorkPositionAddRequest, IModelIdentifier
    {
        [Required]
        public int Id { get; set; }
    }