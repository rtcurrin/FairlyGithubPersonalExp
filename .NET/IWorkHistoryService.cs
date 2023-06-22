public interface IWorkHistoryService
{
	int AddWorkHistory(WorkHistoryAddRequest model, int userId);
	int AddWorkPosition(WorkPositionAddRequest model, int userId);
	void DeleteWorkHistory(int deleteWorkHistoryId);
	void DeleteWorkPosition(int deleteWorkPositionId);
	WorkHistory GetWorkHistoryById(int id);
	Paged<WorkHistory> GetWorkHistoryByUserId(int userId, int pageIndex, int pageSize);
	WorkPosition GetWorkPositionById(int id);
	List<WorkPosition> GetWorkPositionByWorkHistoryId(int workHistoryId);
	void UpdateWorkHistory(WorkHistoryUpdateRequest model, int userId);
	void UpdateWorkPosition(WorkPositionUpdateRequest model, int userId);
}