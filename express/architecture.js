// dependancy inversion
// seperation of concerns
// single responsibility

src/
    domain/
        models/
            User.ts
        repositories/
            UserRepository.ts
        services/
            UserService.ts
    infrastructure/
        express/
            controllers/
                UserController.ts
                index.ts
            middlewares/
                authMiddleware.ts
                validationMiddleware.ts
            routes/
                userRoutes.ts
            index.ts
        database/
        index.ts
    usecases/
        createUser/
            CreateUserInput.ts
            CreateUserOutput.ts
            CreateUserUseCase.ts
    app.ts
