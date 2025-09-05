# ---- Build Stage ----
FROM maven:3.9.9-eclipse-temurin-21 AS builder
WORKDIR /app

# Cache dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source and build
COPY src ./src
RUN mvn clean package -DskipTests

# ---- Run Stage ----
FROM openjdk:21-jdk AS runner
WORKDIR /app

# Copy the JAR from the build stage
COPY --from=builder /app/target/billing-service-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 4001
EXPOSE 9001

ENTRYPOINT ["java", "-jar", "app.jar"]
