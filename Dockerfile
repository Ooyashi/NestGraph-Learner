# Start of Selection
# Build the Docker image with the command: docker build -t my-postgres-image .
FROM postgres:14-alpine

EXPOSE 5432

ENV POSTGRES_PASSWORD=learner_user_password
ENV POSTGRES_USER=my_learner_user
ENV POSTGRES_DB=local-db-learner
ENV POSTGRES_HOST_AUTH_METHOD=trust

HEALTHCHECK --interval=10s --timeout=5s --retries=5 --start-period=10s CMD pg_isready -U my_learner_user -d local-db-learner
# End of Selection
