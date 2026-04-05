-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercicio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "grupo_muscular" TEXT NOT NULL,

    CONSTRAINT "Exercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutExercicio" (
    "id" SERIAL NOT NULL,
    "workoutId" INTEGER NOT NULL,
    "exercicioId" INTEGER NOT NULL,
    "series" INTEGER NOT NULL,
    "repeticoes" INTEGER NOT NULL,
    "carga" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "WorkoutExercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sessao" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workoutId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Sessao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SessaoExercicio" (
    "id" SERIAL NOT NULL,
    "sessaoId" INTEGER NOT NULL,
    "exercicioId" INTEGER NOT NULL,
    "series" INTEGER NOT NULL,
    "repeticoes" INTEGER NOT NULL,
    "carga" DOUBLE PRECISION NOT NULL,
    "feito" BOOLEAN NOT NULL,

    CONSTRAINT "SessaoExercicio_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutExercicio" ADD CONSTRAINT "WorkoutExercicio_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutExercicio" ADD CONSTRAINT "WorkoutExercicio_exercicioId_fkey" FOREIGN KEY ("exercicioId") REFERENCES "Exercicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessaoExercicio" ADD CONSTRAINT "SessaoExercicio_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "Sessao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessaoExercicio" ADD CONSTRAINT "SessaoExercicio_exercicioId_fkey" FOREIGN KEY ("exercicioId") REFERENCES "Exercicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
