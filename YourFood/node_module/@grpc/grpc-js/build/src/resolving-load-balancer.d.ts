import { ChannelControlHelper, LoadBalancer } from './load-balancer';
import { ServiceConfig } from './service-config';
import { LoadBalancingConfig } from './load-balancing-config';
import { SubchannelAddress } from './subchannel';
import { GrpcUri } from './uri-parser';
export declare class ResolvingLoadBalancer implements LoadBalancer {
    private readonly target;
    private readonly channelControlHelper;
    private readonly defaultServiceConfig;
    /**
     * The resolver class constructed for the target address.
     */
    private innerResolver;
    private childLoadBalancer;
    private latestChildState;
    private latestChildPicker;
    /**
     * This resolving load balancer's current connectivity state.
     */
    private currentState;
    /**
     * The service config object from the last successful resolution, if
     * available. A value of undefined indicates that there has not yet
     * been a successful resolution. A value of null indicates that the last
     * successful resolution explicitly provided a null service config.
     */
    private previousServiceConfig;
    /**
     * The backoff timer for handling name resolution failures.
     */
    private readonly backoffTimeout;
    /**
     * Indicates whether we should attempt to resolve again after the backoff
     * timer runs out.
     */
    private continueResolving;
    /**
     * Wrapper class that behaves like a `LoadBalancer` and also handles name
     * resolution internally.
     * @param target The address of the backend to connect to.
     * @param channelControlHelper `ChannelControlHelper` instance provided by
     *     this load balancer's owner.
     * @param defaultServiceConfig The default service configuration to be used
     *     if none is provided by the name resolver. A `null` value indicates
     *     that the default behavior should be the default unconfigured behavior.
     *     In practice, that means using the "pick first" load balancer
     *     implmentation
     */
    constructor(target: GrpcUri, channelControlHelper: ChannelControlHelper, defaultServiceConfig: ServiceConfig | null);
    private updateResolution;
    private updateState;
    private handleResolutionFailure;
    exitIdle(): void;
    updateAddressList(addressList: SubchannelAddress[], lbConfig: LoadBalancingConfig | null): void;
    resetBackoff(): void;
    destroy(): void;
    getTypeName(): string;
}
