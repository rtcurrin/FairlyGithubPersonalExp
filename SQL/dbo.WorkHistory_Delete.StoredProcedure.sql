CREATE proc					[dbo].[WorkHistory_Delete]
							@Id int

as
/*--TestCode







	DECLARE					@Id int = 15

	SELECT					[Id]
							,[CompanyName]
							,[CompanyContact]
							,[CompanyEmail]
							,[CompanyPhone]
							,[LocationId]
							,[UserId]
							,[IndustryId]
							,[StartDate]
							,[EndDate]
							,[DateCreated]
							,[DateModified]

	FROM					[dbo].[WorkHistory]
	WHERE					Id = @Id

	EXECUTE					[dbo].[WorkHistory_Delete]
							@Id

	SELECT					[Id]
							,[CompanyName]
							,[CompanyContact]
							,[CompanyEmail]
							,[CompanyPhone]
							,[LocationId]
							,[UserId]
							,[IndustryId]
							,[StartDate]
							,[EndDate]
							,[DateCreated]
							,[DateModified]

	FROM					[dbo].[WorkHistory]
	WHERE					Id = @Id







*/

BEGIN

	DELETE						
	FROM					[dbo].[WorkHistory]
							
	WHERE					Id = @Id 

END
GO
