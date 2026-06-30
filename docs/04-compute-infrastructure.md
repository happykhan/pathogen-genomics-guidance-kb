# Compute Infrastructure

## Core Principle

Compute infrastructure for pathogen genomics is not just hardware capacity. It includes workflow execution, data movement, software environments, provenance, user management, monitoring, maintenance, and the people responsible for operating the system.

## Five Planning Questions

1. How much does the infrastructure try to solve?
2. How is analysis run?
3. Where is analysis run?
4. How does data flow?
5. Who has access?

## Responsibility Models

- Software as a Service: users bring data; the service controls pipelines and infrastructure.
- Platform as a Service: users bring data and workflows; the platform controls infrastructure.
- Infrastructure as a Service: users manage data, workflows, operating systems, execution tools, and surrounding services.

The responsibility model is separate from physical location. Cloud, on-prem, HPC, and laptop systems can each shift responsibilities differently.

## Minimum Expectations

- Use containerised workflows where feasible.
- Make workflow versions, parameters, inputs, outputs, and software versions traceable.
- Plan data movement, not just compute.
- Coordinate with central IT and information governance early.
- Design for current capacity and plausible future scale.
- Include staffing and maintenance effort in cost estimates.

## Source Basis

Initial content distilled from the local PHA4GE manuscript `Considerations for Compute Infrastructure for Pathogen Sequence Analysis`.

